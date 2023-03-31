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

class ChooseProposeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('quantite', IntegerType::class, [
                'data' => 1,
                'attr' => array('id' => 'quantiteChoice'),
            ])
            ->add('propose', ChoiceType::class, [
                'choices' => $options['proposes'],
                'choice_label' => function ($propose) {
                    return $propose->getPrix();
                },
                'attr' => array('id' => 'proposeChoice'),
                // 'label' => false,
                // 'row_attr' => [
                //     'class' => 'd-none',
                // ],
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
