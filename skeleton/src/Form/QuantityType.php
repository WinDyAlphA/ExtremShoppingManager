<?php

namespace App\Form;

use App\Entity\Contient;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class QuantityType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('quantite', TextType::class, [
            'attr' => [
                'class' => 'form-control textQuantity'
            ]
        ])
        ->add('achete', TextType::class, [
            'attr' => [
                'class' => 'form-control achete'
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
            'data_class' => Contient::class,
            'allow_extra_fields' => true,
        ]);
    }
}
