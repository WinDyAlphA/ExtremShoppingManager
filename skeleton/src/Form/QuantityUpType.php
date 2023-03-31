<?php

namespace App\Form;

use App\Entity\Liste;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\RangeType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class QuantityUpType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('quantite', RangeType::class, [
                'attr' => [
                    'min' => 1,
                    'max' => 100,
                    'class' => 'form-control rangeQuantity'
                ]
            ])
            ->add('quantite_nb', TextType::class, [
                'attr' => [
                    'class' => 'form-control textQuantity'
                ]
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'OK',
                'attr' => [
                    'class' => 'btn btn-primary submitQuantity'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Liste::class,
        ]);
    }
}
