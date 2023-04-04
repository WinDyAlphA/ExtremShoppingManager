<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use App\Repository\ContientRepository;
use App\Repository\ListeRepository;
use App\Repository\ProposeRepository;
use App\Repository\TypeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;


class ProfilController extends AbstractController
{
    #[Route('/profil', name: 'app_profil')]
    public function index(ListeRepository $listeRepo,EntityManagerInterface $entityManager,ContientRepository $contientRepo, ProposeRepository $proposeRepo, ArticleRepository $articleRepo, TypeRepository $typeRepo): Response
    {
        $listes = $this->getUser()->getListe();
        $pseudo = $this->getUser()->getPseudo();
        $articles = $articleRepo->findAll();
        $proposes = $proposeRepo->findAll();
        $contients = $contientRepo->findAll();
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
        // Round to 2 decimals
        $average = round($average, 2);

        $mostUsedMagasins = array();
        foreach ($listes as $liste) {
            $contients = $liste->getContient();
            foreach ($contients as $contient) {
                $propose = $contient->getPropose();
                $magasin = $propose->getMagasin();
                if (array_key_exists($magasin->getNom(), $mostUsedMagasins)) {
                    $mostUsedMagasins[$magasin->getNom()] += $contient->getPropose()->getPrix();
                } else {
                    $mostUsedMagasins[$magasin->getNom()] = $contient->getPropose()->getPrix();
                }
            }
        }
        arsort($mostUsedMagasins);
        $mostUsedMagasins = array_slice($mostUsedMagasins, 0, 5, true);

        $mostUsedMagasinsNames = array_keys($mostUsedMagasins);
        $mostUsedMagasinsCount = array_values($mostUsedMagasins);

        // Same for types
        $mostUsedTypes = array();
        foreach ($listes as $liste) {
            $contients = $liste->getContient();
            foreach ($contients as $contient) {
                $propose = $contient->getPropose();
                $article = $propose->getArticle();
                $type = $article->getType();
                if (array_key_exists($type->getNom(), $mostUsedTypes)) {
                    $mostUsedTypes[$type->getNom()] += $contient->getPropose()->getPrix();
                } else {
                    $mostUsedTypes[$type->getNom()] = $contient->getPropose()->getPrix();
                }
            }
        }
        arsort($mostUsedTypes);
        $mostUsedTypes = array_slice($mostUsedTypes, 0, 5, true);

        $mostUsedTypesNames = array_keys($mostUsedTypes);
        $mostUsedTypesCount = array_values($mostUsedTypes);


        return $this->render('profil/index.html.twig', [
            'controller_name' => 'ProfilController',
            'liste' => $listes,
            'average' => $average,
            'pseudo' => $pseudo,
            'articles' => $articles,
            'proposes' => $proposes,
            'contients' => $contients,
            'mostUsedMagasins' => $mostUsedMagasinsCount,
            'mostUsedMagasinsNames' => $mostUsedMagasinsNames,
            'mostUsedTypes' => $mostUsedTypesCount,
            'mostUsedTypesNames' => $mostUsedTypesNames,
        ]);
    }
}
