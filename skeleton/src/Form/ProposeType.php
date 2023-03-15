<?php

namespace App\Form;

use App\Entity\Propose;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class ProposeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('prix')
            ->add('article', ChoiceType::class, array(
                'choices' => $this->getArticles($options['articles']),
                'choice_label' => function ($article) {
                    return $article->getNom();
                },
                'choice_value' => 'id',
                'multiple' => false,
                'expanded' => false,
                'placeholder' => 'Sélectionnez un article',
                'attr' => array('class' => 'select2'),
            ))
            ->add('magasin', ChoiceType::class, array(
                'choices' => $this->getMagasins($options['magasins']),
                'choice_label' => function ($magasin) {
                    return $magasin->getNom();
                },
                'choice_value' => 'id',
                'multiple' => false,
                'expanded' => false,
                'placeholder' => 'Sélectionnez un magasin',
                'attr' => array('class' => 'select2'),
            ))
            ->add('Ajouter', SubmitType::class)
        ;
    }

    private function getArticles($optionArticles)
    {
        $articles = array();
        foreach ($optionArticles as $article) {
            $articles[] = $article;
        }
        return $articles;
    }

    private function getMagasins($optionMagasins)
    {
        $magasins = array();
        foreach ($optionMagasins as $magasin) {
            $magasins[] = $magasin;
        }
        return $magasins;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Propose::class,
            'articles' => Collection::class,
            'magasins' => Collection::class,
        ]);
    }
}
