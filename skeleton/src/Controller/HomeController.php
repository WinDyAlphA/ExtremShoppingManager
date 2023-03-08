<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ListeRepository;
use App\Controller\ListeController;



class HomeController extends AbstractController
{
    #[Route('/home', name: 'app_home')]
    public function index(ListeRepository $listeRepo): Response
    {
        $listes = $this->getUser()->getListe();
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'listes' => $listes,
        ]);
    }
}
