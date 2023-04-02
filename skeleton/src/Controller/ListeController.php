<?php

namespace App\Controller;

use App\Form\ListeModifyType;
use App\Form\ModifyListeType;
use App\Form\QuantityType;

use App\Repository\ContientRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ListeRepository;
use App\Repository\MagasinRepository;
use App\Repository\ArticleRepository;
use App\Repository\ProposeRepository;
use App\Form\NewListeType;
use App\Form\ChooseProposeType;
use App\Form\AddArticleToListType;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Liste;
use App\Entity\Contient;


function aversine($lat1, $lon1, $lat2, $lon2) {
    $R = 6371; // km
    $dLat = deg2rad($lat2-$lat1);
    $dLon = deg2rad($lon2-$lon1);
    $lat1 = deg2rad($lat1);
    $lat2 = deg2rad($lat2);

    $a = sin($dLat/2) * sin($dLat/2) +
        sin($dLon/2) * sin($dLon/2) * cos($lat1) * cos($lat2); 
    $c = 2 * atan2(sqrt($a), sqrt(1-$a)); 
    $d = $R * $c;
    return $d;
}


class ListeController extends AbstractController
{
    #[Route('/liste_show/{id}/', name: 'liste_show')]
    public function index(Liste $liste, ListeRepository $listeRepo, 
        MagasinRepository $magasinRepo,
        ArticleRepository $articleRepo, 
        Request $request, 
        EntityManagerInterface $entityManager

        ): Response
    {   
        $user = $this->getUser();
        // If the user is not logged in, redirect to login
        if (!$user) {
            return $this->redirectToRoute('app_login');
        }
        // If the user is not the owner of the list, redirect to home.
        if ($liste->getUtilisateur() != $user && $user->getRoles()[0] != "ROLE_ADMIN") {
            return $this->redirectToRoute('app_home');
        }
        $contient = new Contient();
        $contient->setListe($liste);
        $formUp = $this->createForm(QuantityType::class, $contient);
        $formUp->handleRequest($request);
        if ($formUp->isSubmitted() && $formUp->isValid()) {
            
            $entityManager->persist($contient);
            $entityManager->flush();
            return $this->redirectToRoute('liste_show', ['id' => $liste->getId()]);
        }

        $formModify = $this->createForm(ListeModifyType::class);
        $formModify->handleRequest($request);
        if ($formModify->isSubmitted() && $formModify->isValid()) {
            $liste = $formModify->getData();
            $liste->setTitre($liste->getTitre());
            $liste->setDescription($liste->getDescription());
            $entityManager->persist($liste);
            $entityManager->flush();
            return $this->redirectToRoute('liste_show', ['id' => $liste->getId()]);
        }

    
        $magasins = $magasinRepo->findAll();

        $form = $this->createForm(AddArticleToListType::class, null, array('magasins' => $magasins));
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $contient = $form->getData();
            $propose = $contient->getPropose();
            $contient->setPropose($propose);
            $contient->setListe($liste);
            $contient->setQuantite($contient->getQuantite());
            $contient->setAchete(false);

            $entityManager->persist($contient);
            $entityManager->flush();
            return $this->redirectToRoute('liste_show', ['id' => $liste->getId()]);
        }

        // Get all the different Magasins linked to the list
        $magasins = array();
        foreach ($liste->getContient() as $contient) {
            $magasin = $contient->getPropose()->getMagasin();
            if (!in_array($magasin, $magasins)) {
                array_push($magasins, $magasin);
            }
        }
        
        return $this->render('liste/index.html.twig', [
            'controller_name' => 'ListeController',
            'liste' => $liste,
            'magasins' => $magasinRepo->findAll(),
            'articles' => $articleRepo->findAll(),
            'form' => $form->createView(),
            'formModify' => $formModify->createView(),
            'formUp' => $formUp->createView(),
            'usedMagasins' => $magasins,
        ]);
    }

    #[Route('/liste/liste_new', name: 'liste_new')]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(NewListeType::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $liste = $form->getData();
            $liste->setUtilisateur($this->getUser());
            $entityManager->persist($liste);
            $entityManager->flush();
            return $this->redirectToRoute('liste_show', ['id' => $liste->getId()]);
        }

        return $this->render('liste/new.html.twig', [
            'controller_name' => 'ListeController',
            'form' => $form->createView(),
        ]);
    }

    #[Route('/liste/liste_delete/{id}', name: 'liste_delete')]

    public function delete(Liste $liste, ListeRepository $listeRepo, EntityManagerInterface $entityManager, ContientRepository $contientRepo): Response
    {   

        $contients = $contientRepo->findBy(['liste' => $liste]);
        foreach ($contients as $contient) {
            $entityManager->remove($contient);
        }
        $entityManager->remove($liste);
        $entityManager->flush();
        return $this->redirectToRoute('app_home');
    }

    #[Route('/liste/article_delete/{id}/{contientId}', name: 'article_delete')]

    public function deleteArticle(Int $id, Int $contientId, ListeRepository $listeRepo, EntityManagerInterface $entityManager, ArticleRepository $articleRepository, ContientRepository $contientRepository): Response
    {
        $contient = $contientRepository->find($contientId);
        $entityManager->remove($contient);
        $entityManager->flush();
        return $this->redirectToRoute('liste_show', ['id' => $id]);
    }

    #[Route('/liste/add_article/{id}', name: 'liste_add_article')]
    public function addArticle(Int $id, ListeRepository $listeRepo, 
        MagasinRepository $magasinRepo,
        ArticleRepository $articleRepo,
        ProposeRepository $proposeRepo,
        Request $request, 
        EntityManagerInterface $entityManager
        ): Response
    {
        $user = $this->getUser();
        $liste = $listeRepo->find($id);
        // If the user is not logged in, redirect to login
        if (!$user) {
            return $this->redirectToRoute('app_login');
        }
        // If the user is not the owner of the list, redirect to home.
        if ($liste->getUtilisateur() != $user && $user->getRoles()[0] != "ROLE_ADMIN") {
             return $this->redirectToRoute('app_home');
        }
    
        $magasins = $magasinRepo->findAll();

        // Get an array of the loc of the magasins used in the list
        $magasinsLoc = array();
        foreach ($liste->getContient() as $contient) {
            $magasin = $contient->getPropose()->getMagasin();
            if (!in_array($magasin, $magasinsLoc)) {
                echo $magasin->getNom();
                array_push($magasinsLoc, array($magasin->getGPSlat(), $magasin->getGPSlong()));
            }
        }

        // Same for proposeList
        $proposeList = $proposeRepo->findAll();
        usort($proposeList, function($a, $b) use ($magasinsLoc) {
            $lat1 = $a->getMagasin()->getGPSlat();
            $lon1 = $a->getMagasin()->getGPSlong();
            $lat2 = $b->getMagasin()->getGPSlat();
            $lon2 = $b->getMagasin()->getGPSlong();
            $distA = 0;
            $distB = 0;
            foreach ($magasinsLoc as $loc) {
                $tmp1 = aversine($loc[0], $loc[1], $lat1, $lon1);
                $tmp2 = aversine($loc[0], $loc[1], $lat2, $lon2);
                if ($tmp1 < $distA || $distA == 0) {
                    $distA = $tmp1;
                }
                if ($tmp2 < $distB || $distB == 0) {
                    $distB = $tmp2;
                }
            }
            return $distA <=> $distB;
        });

        $articleForm = $this->createForm(ChooseProposeType::class, null, 
            array('articles' => $articleRepo->findAll(), 
            'magasins' => $magasins, 
            'proposes' => $proposeRepo->findAll()));
        
        
        $articleForm->handleRequest($request);

        if ($articleForm->isSubmitted() && $articleForm->isValid()) {
    
            $contient = $articleForm->getData();
            $contient->setListe($liste);
            $contient->setAchete(false);
            $entityManager->persist($contient);
            $entityManager->flush();
            return $this->redirectToRoute('liste_show', ['id' => $liste->getId()]);
            
        }
        


        return $this->render('liste/add_article.html.twig', [
            'controller_name' => 'ListeController',
            'liste' => $liste,
            'magasins' => $magasins,
            'articles' => $articleRepo->findAll(),
            'form' => $articleForm->createView(),
            'proposes' => $proposeList,
        ]);
    }


}

