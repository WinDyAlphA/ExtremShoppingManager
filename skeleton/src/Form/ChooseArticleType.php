<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use App\Entity\Article;
use App\Entity\Contient;

class ChooseArticleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('article', ChoiceType::class, [
                'choices' => $options['articles'],
                'choice_label' => function ($article) {
                    return $article->getNom();
                },
                'attr' => array('id' => 'articleChoice'),
            ])
            ->add('quantite', IntegerType::class, [
                'data' => 1,
                'attr' => array('id' => 'quantiteChoice'),
            ])
            ->add('magasin', ChoiceType::class, [
                'choices' => $options['magasins'],
                'choice_label' => function ($magasin) {
                    return $magasin->getNom();
                },
                'attr' => array('id' => 'magasinChoice'),
            ])
            ->add('Prix', IntegerType::class, [
                'attr' => array('id' => 'prixChoice'),
                'disabled' => true,
            ])
            ->add('propose', ChoiceType::class, [
                'choices' => [],
                'choice_label' => function ($propose) {
                    return $propose->getPrix();
                },
                'attr' => array('id' => 'proposeChoice'),
                'disabled' => true,
            ])
            
            ->add('Ajouter', SubmitType::class, [
                'attr' => array('id' => 'ajouterButton'),
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Contient::class,
            'articles' => [],
            'magasins' => [],
            'proposes' => [],
        ]);
    }
}
