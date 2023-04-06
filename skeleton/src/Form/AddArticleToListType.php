<?php

namespace App\Form;

use App\Entity\Contient;
use App\Repository\ArticleRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AddArticleToListType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('propose', ChoiceType::class, array(
            'choices' => $this->getProposeWithMagasins($options['magasins']),
            'choice_label' => function ($propose) {
                return $propose->getMagasin()->getNom() . ' - ' . $propose->getArticle()->getNom();
            },
            'choice_value' => 'id',
            'multiple' => false,
            'expanded' => false,
            'placeholder' => 'Sélectionnez un article',
            'attr' => array('class' => 'select2'),
        ))
        ->add('quantite')
        ->add('Ajouter', SubmitType::class);

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Contient::class,
            'magasins' => Collection::class,
        ]);
    }

    private function getProposeWithMagasins($magasins)
    {
        $proposes = array();
        foreach ($magasins as $magasin) {
            foreach ($magasin->getProposess() as $propose) {
                $proposes[] = $propose;
            }
        }
        return $proposes;
    }
}
