<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class BaseController extends AbstractController
{
    private $tokenStorage;

    public function __construct(TokenStorageInterface $tokenStorage)
    {
        $this->tokenStorage = $tokenStorage;
    }

    #[Route('/', name: 'presentation')]
    public function index(): Response
    {
        // Si l'utilisateur est connecté, supprimer la connexion
        $token = $this->tokenStorage->getToken();
        if ($token && $token->getUser()) {
            $this->tokenStorage->setToken(null);
        }

        return $this->render('base/index.html.twig', [
            'controller_name' => 'BaseController',
        ]);
    }
}
