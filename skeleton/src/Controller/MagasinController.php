<?php

namespace App\Controller;

use App\Entity\Magasin;
use App\Form\Magasin1Type;
use App\Repository\ArticleRepository;
use App\Repository\MagasinRepository;
use App\Repository\ProposeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('admin/magasin')]
class MagasinController extends AbstractController
{
    #[Route('/', name: 'app_magasin_index', methods: ['GET'])]
    public function index(MagasinRepository $magasinRepository, ArticleRepository $articleRepository, ProposeRepository $proposeRepository): Response
    {
        return $this->render('admin/index.html.twig', [
            'magasins' => $magasinRepository->findAll(),
            'articles' => $articleRepository->findAll(),
            'proposes' => $proposeRepository->findAll(),


        ]);
    }

    #[Route('/admin/new', name: 'app_magasin_new', methods: ['GET', 'POST'])]
    public function new(Request $request, MagasinRepository $magasinRepository,ArticleRepository $articleRepository, ProposeRepository $proposeRepository): Response
    {
        $magasin = new Magasin();
        $form = $this->createForm(Magasin1Type::class, $magasin);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $magasinRepository->save($magasin, true);

            return $this->redirectToRoute('app_magasin_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/magasinNew.html.twig', [
            'magasin' => $magasin,
            'form' => $form,
            'articles' => $articleRepository->findAll(),
            'proposes' => $proposeRepository->findAll(),
        ]);
    }

    #[Route('/admin/{id}', name: 'app_magasin_show', methods: ['GET'])]
    public function show(Magasin $magasin,ArticleRepository $articleRepository, ProposeRepository $proposeRepository): Response
    {
        return $this->render('admin/magasinShow.html.twig', [
            'magasin' => $magasin,
            'articles' => $articleRepository->findAll(),
            'proposes' => $proposeRepository->findAll(),
        ]);
    }

    #[Route('/admin/{id}/edit', name: 'app_magasin_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Magasin $magasin, MagasinRepository $magasinRepository,ArticleRepository $articleRepository, ProposeRepository $proposeRepository): Response
    {
        $form = $this->createForm(Magasin1Type::class, $magasin);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $magasinRepository->save($magasin, true);

            return $this->redirectToRoute('app_magasin_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/magasinEdit.html.twig', [
            'magasin' => $magasin,
            'form' => $form,
            'articles' => $articleRepository->findAll(),
            'proposes' => $proposeRepository->findAll(),
        ]);
    }

    #[Route('/admin/{id}', name: 'app_magasin_delete', methods: ['POST'])]
    public function delete(Request $request, Magasin $magasin, MagasinRepository $magasinRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$magasin->getId(), $request->request->get('_token'))) {
            $magasinRepository->remove($magasin, true);
        }

        return $this->redirectToRoute('app_magasin_index', [], Response::HTTP_SEE_OTHER);
    }
}
