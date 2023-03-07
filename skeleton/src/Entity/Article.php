<?php

namespace App\Entity;

use App\Repository\ArticleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ArticleRepository::class)]
class Article
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    #[ORM\ManyToOne(inversedBy: 'articles')]
    private ?type $type = null;

    #[ORM\OneToMany(mappedBy: 'article', targetEntity: Propose::class)]
    private Collection $proposes;

    public function __construct()
    {
        $this->proposes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getType(): ?type
    {
        return $this->type;
    }

    public function setType(?type $type): self
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return Collection<int, Propose>
     */
    public function getProposes(): Collection
    {
        return $this->proposes;
    }

    public function addPropose(Propose $propose): self
    {
        if (!$this->proposes->contains($propose)) {
            $this->proposes->add($propose);
            $propose->setArticle($this);
        }

        return $this;
    }

    public function removePropose(Propose $propose): self
    {
        if ($this->proposes->removeElement($propose)) {
            // set the owning side to null (unless already changed)
            if ($propose->getArticle() === $this) {
                $propose->setArticle(null);
            }
        }

        return $this;
    }
}
