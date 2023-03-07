<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LoginController extends AbstractController
{
    #[Route('/admin/login', name: 'app_login')]
    public function index(): Response
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);

        return $this->render('login/index.html.twig', [
            'controller_name' => 'LoginController',
            $form,
        ]);
    }
}
