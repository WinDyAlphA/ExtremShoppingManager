<?php

namespace App\Controller;

use App\Repository\ProposeRepository;
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
        ProposeRepository $proposeRepo,
        Request $request,
        

        ): Response
    {
        return $this->render('admin/index.html.twig', [
            'controller_name' => 'AdminController',
            'magasins' => $magasinRepo->findAll(),
            'articles' => $articleRepo->findAll(),
            'proposes' => $proposeRepo->findAll(),
        ]);
    }
}
