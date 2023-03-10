<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ListeRepository;


class ListeController extends AbstractController
{
    #[Route('/liste/{id}', name: 'liste_show')]
    public function index(Int $id, ListeRepository $listeRepo): Response
    {
        $liste = $listeRepo->find($id);
        return $this->render('liste/index.html.twig', [
            'controller_name' => 'ListeController',
            'liste' => $liste,
        ]);
    }
}
