<?php

namespace App\Form;

use App\Entity\Article;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class ArticleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom')
            ->add('image')
            ->add('type', ChoiceType::class, array(
                'choices' => $this->getTypes($options['types']),
                'choice_label' => function ($type) {
                    return $type->getNom();
                },
                'choice_value' => 'id',
                'multiple' => false,
                'expanded' => false,
                'placeholder' => 'Sélectionnez un type',
                'attr' => array('class' => 'select2'),
            ))
            ->add('Ajouter', SubmitType::class)
        ;
    }

    private function getTypes($optionTypes)
    {
        $types = array();
        foreach ($optionTypes as $type) {
            $types[] = $type;
        }
        return $types;
    }


    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Article::class,
            'types' => array(),
        ]);
    }
}
