<?php

namespace App\Entity;

use App\Repository\ProposeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProposeRepository::class)]
class Propose
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $prix = null;

    #[ORM\ManyToOne(inversedBy: 'proposes')]
    private ?Article $article = null;

    #[ORM\ManyToOne(inversedBy: 'proposes')]
    private ?Magasin $magasin = null;

    #[ORM\OneToMany(mappedBy: 'propose', targetEntity: Contient::class)]
    private Collection $contients;

    public function __construct()
    {
        $this->contients = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPrix(): ?int
    {
        return $this->prix;
    }

    public function setPrix(int $prix): self
    {
        $this->prix = $prix;

        return $this;
    }

    public function getArticle(): ?Article
    {
        return $this->article;
    }

    public function setArticle(?Article $article): self
    {
        $this->article = $article;

        return $this;
    }

    public function getMagasin(): ?Magasin
    {
        return $this->magasin;
    }

    public function setMagasin(?Magasin $magasin): self
    {
        $this->magasin = $magasin;

        return $this;
    }

    /**
     * @return Collection<int, Contient>
     */
    public function getContients(): Collection
    {
        return $this->contients;
    }

    public function addContient(Contient $contient): self
    {
        if (!$this->contients->contains($contient)) {
            $this->contients->add($contient);
            $contient->setPropose($this);
        }

        return $this;
    }

    public function removeContient(Contient $contient): self
    {
        if ($this->contients->removeElement($contient)) {
            // set the owning side to null (unless already changed)
            if ($contient->getPropose() === $this) {
                $contient->setPropose(null);
            }
        }

        return $this;
    }
}
