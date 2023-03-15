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
    private ?Type $type = null;

    #[ORM\OneToMany(mappedBy: 'article', targetEntity: Propose::class)]
    private Collection $proposess;

    public function __construct()
    {
        $this->proposess = new ArrayCollection();
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

    public function getType(): ?Type
    {
        return $this->type;
    }

    public function setType(?Type $type): self
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return Collection<int, Propose>
     */
    public function getProposess(): Collection
    {
        return $this->proposess;
    }

    public function addProposess(Propose $proposess): self
    {
        if (!$this->proposess->contains($proposess)) {
            $this->proposess->add($proposess);
            $proposess->setArticle($this);
        }

        return $this;
    }

    public function removeProposess(Propose $proposess): self
    {
        if ($this->proposess->removeElement($proposess)) {
            // set the owning side to null (unless already changed)
            if ($proposess->getArticle() === $this) {
                $proposess->setArticle(null);
            }
        }

        return $this;
    }
}
