<?php

namespace App\Controller;

use App\Form\ListeModifyType;
use App\Form\ModifyListeType;
use App\Repository\ContientRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ListeRepository;
use App\Repository\MagasinRepository;
use App\Repository\ArticleRepository;
use App\Form\NewListeType;
use App\Form\AddArticleToListType;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Liste;



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
            'formModify' => $formModify->createView(),
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

}
