<?php

namespace App\Controller;

use App\Entity\Article;
use App\Form\Article2Type;
use App\Repository\ArticleRepository;
use App\Repository\MagasinRepository;
use App\Repository\ProposeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('admin/article')]
class ArticleController extends AbstractController
{
    #[Route('/', name: 'app_article_index', methods: ['GET'])]
    public function index(ArticleRepository $articleRepository, MagasinRepository $magasinRepository, ProposeRepository $proposeRepository): Response
    {
        return $this->render('admin/index.html.twig', [
            'articles' => $articleRepository->findAll(),
            'magasins' => $magasinRepository->findAll(),
            'proposes' => $proposeRepository->findAll(),
        ]);
    }

    #[Route('/admin/new', name: 'app_article_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ArticleRepository $articleRepository, MagasinRepository $magasinRepository, ProposeRepository $proposeRepository): Response
    {
        $article = new Article();
        $form = $this->createForm(Article2Type::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $articleRepository->save($article, true);

            return $this->redirectToRoute('app_article_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('articleNew.html.twig', [
            'article' => $article,
            'form' => $form,
            'magasins' => $magasinRepository->findAll(),
            'proposes' => $proposeRepository->findAll(),
        ]);
    }

    #[Route('/admin/{id}', name: 'app_article_show', methods: ['GET'])]
    public function show(Article $article, MagasinRepository $magasinRepository, ProposeRepository $proposeRepository): Response
    {
        return $this->render('admin/articleShow.html.twig', [
            'article' => $article,
            'magasins' => $magasinRepository->findAll(),
            'proposes' => $proposeRepository->findAll(),
        ]);
    }

    #[Route('/admin/{id}/edit', name: 'app_article_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Article $article, ArticleRepository $articleRepository): Response
    {
        $form = $this->createForm(Article2Type::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $articleRepository->save($article, true);

            return $this->redirectToRoute('app_article_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('article/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/admin/{id}', name: 'app_article_delete', methods: ['POST'])]
    public function delete(Request $request, Article $article, ArticleRepository $articleRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->request->get('_token'))) {
            $articleRepository->remove($article, true);
        }

        return $this->redirectToRoute('app_article_index', [], Response::HTTP_SEE_OTHER);
    }
}
