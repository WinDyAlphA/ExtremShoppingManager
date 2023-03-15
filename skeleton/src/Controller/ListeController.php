<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ListeRepository;
use App\Controller\ListeController;
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
        $liste = $listeRepo->find($id);
        $magasins = $magasinRepo->findAll();
        $form = $this->createForm(AddArticleToListType::class, null, array('magasins' => $magasins));
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $contient = $form->getData();
            $propose = $contient->getPropose();
            $contient->setPropose($propose);
            $contient->setListe($liste);
            $contient->setQuantite(1);
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
}
