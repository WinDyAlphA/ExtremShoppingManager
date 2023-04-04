<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\ArticleType;
use App\Form\MagasinType;
use App\Form\ProposeType;
use App\Repository\ArticleRepository;
use App\Repository\MagasinRepository;
use App\Repository\TypeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class AdminController extends AbstractController
{
    #[Route('/admin', name: 'app_admin')]
    public function index(ArticleRepository $articleRepo, 
        MagasinRepository $magasinRepo, 
        TypeRepository $typeRepo,
        EntityManagerInterface $em, 
        Request $request,
        ): Response
    {
        $formMagasin = $this->createForm(MagasinType::class);
        $formArticle = $this->createForm(ArticleType::class, null, array(
            'types' => $typeRepo->findAll(),
        ));
        $fromPropose = $this->createForm(ProposeType::class, null, array(
            'articles' => $articleRepo->findAll(),
            'magasins' => $magasinRepo->findAll(),
        ));
        $formMagasin->handleRequest($request);
        $formArticle->handleRequest($request);
        $fromPropose->handleRequest($request);
        if ($formArticle->isSubmitted() && $formArticle->isValid()) {
            $article = $formArticle->getData();
            $articleRepo->save($article, true);
            return $this->redirectToRoute('app_admin');
        } else if ($formMagasin->isSubmitted() && $formMagasin->isValid()) {
            $magasin = $formMagasin->getData();
            $em->persist($magasin);
            $em->flush();
            return $this->redirectToRoute('app_admin');
        } else if ($fromPropose->isSubmitted() && $fromPropose->isValid()) {
            $propose = $fromPropose->getData();
            $entityManager->persist($propose);
            $entityManager->flush();
            return $this->redirectToRoute('app_admin');
        }

        return $this->render('admin/index.html.twig', [
            'controller_name' => 'AdminController',
            'formMagasin' => $formMagasin->createView(),
            'formArticle' => $formArticle->createView(),
            'formPropose' => $fromPropose->createView(),
        ]);
    }
}
