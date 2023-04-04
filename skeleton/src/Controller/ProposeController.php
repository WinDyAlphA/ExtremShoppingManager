<?php

namespace App\Controller;

use App\Entity\Propose;
use App\Form\Propose1Type;
use App\Repository\ProposeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\MagasinRepository;
use App\Repository\ArticleRepository;


#[Route('admin/propose')]
class ProposeController extends AbstractController
{
    #[Route('/', name: 'app_propose_index', methods: ['GET'])]
    public function index(MagasinRepository $magasinRepository, ArticleRepository $articleRepository, ProposeRepository $proposeRepository): Response
    {
        return $this->render('admin/index.html.twig', [
            'magasins' => $magasinRepository->findAll(),
            'articles' => $articleRepository->findAll(),
            'proposes' => $proposeRepository->findAll(),


        ]);
    }

    #[Route('/admin/new', name: 'app_propose_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ProposeRepository $proposeRepository,MagasinRepository $magasinRepository, ArticleRepository $articleRepository): Response
    {
        $propose = new Propose();
        $form = $this->createForm(Propose1Type::class, $propose);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $proposeRepository->save($propose, true);

            return $this->redirectToRoute('app_propose_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/proposeNew.html.twig', [
            'propose' => $propose,
            'form' => $form,
            'magasins' => $magasinRepository->findAll(),
            'articles' => $articleRepository->findAll(),

        ]);
    }

    #[Route('/admin/{id}', name: 'app_propose_show', methods: ['GET'])]
    public function show(Propose $propose,MagasinRepository $magasinRepository, ArticleRepository $articleRepository): Response
    {
        return $this->render('admin/proposeShow.html.twig', [
            'propose' => $propose,
            'magasins' => $magasinRepository->findAll(),
            'articles' => $articleRepository->findAll(),


        ]);
    }

    #[Route('/admin/{id}/edit', name: 'app_propose_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Propose $propose, ProposeRepository $proposeRepository,MagasinRepository $magasinRepository, ArticleRepository $articleRepository): Response
    {
        $form = $this->createForm(Propose1Type::class, $propose);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $proposeRepository->save($propose, true);

            return $this->redirectToRoute('app_propose_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/proposeEdit.html.twig', [
            'propose' => $propose,
            'form' => $form,
            'magasins' => $magasinRepository->findAll(),
            'articles' => $articleRepository->findAll(),
        ]);
    }

    #[Route('/admin/{id}', name: 'app_propose_delete', methods: ['POST'])]
    public function delete(Request $request, Propose $propose, ProposeRepository $proposeRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$propose->getId(), $request->request->get('_token'))) {
            $proposeRepository->remove($propose, true);
        }

        return $this->redirectToRoute('app_propose_index', [], Response::HTTP_SEE_OTHER);
    }
}
