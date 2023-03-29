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
        if(count($listes) == 0 || count($listes) == null){
            $counter = 1;
        } else {
            $counter = count($listes);
        }
        $total = 0;
        foreach ($listes as $liste) {
            $total += $liste->getTotal();
        }
        $average = $total / $counter;
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'listes' => $listes,
            'average' => $average,
        ]);
    }
}
