<?php

namespace App\Controller;

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



class ListeController extends AbstractController
{
    #[Route('/liste_show/{id}', name: 'liste_show')]
    public function index(Int $id, ListeRepository $listeRepo, 
        MagasinRepository $magasinRepo,
        ArticleRepository $articleRepo, 
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
        return $this->render('liste/index.html.twig', [
            'controller_name' => 'ListeController',
            'liste' => $liste,
            'magasins' => $magasinRepo->findAll(),
            'articles' => $articleRepo->findAll(),
            'form' => $form->createView(),
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

    public function delete(Int $id, ListeRepository $listeRepo, EntityManagerInterface $entityManager, ContientRepository $contientRepo): Response
    {
        $liste = $listeRepo->find($id);
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
            'magasins' => $magasinRepo->findAll(),
            'articles' => $articleRepo->findAll(),
            'form' => $articleForm->createView(),
            'proposes' => $proposeRepo->findAll(),
        ]);
    }

}
