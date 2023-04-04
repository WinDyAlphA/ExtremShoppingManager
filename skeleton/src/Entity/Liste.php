<?php

namespace App\Entity;

use App\Repository\ListeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ListeRepository::class)]
class Liste
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $titre = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $description = null;

    #[ORM\OneToMany(mappedBy: 'liste', targetEntity: Contient::class)]
    private Collection $contient;

    #[ORM\ManyToOne(inversedBy: 'liste')]
    private ?User $utilisateur = null;

    public function __construct()
    {
        $this->contient = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return Collection<int, Contient>
     */
    public function getContient(): Collection
    {
        return $this->contient;
    }

    public function addContient(Contient $contient): self
    {
        if (!$this->contient->contains($contient)) {
            $this->contient->add($contient);
            $contient->setListe($this);
        }

        return $this;
    }

    public function removeContient(Contient $contient): self
    {
        if ($this->contient->removeElement($contient)) {
            // set the owning side to null (unless already changed)
            if ($contient->getListe() === $this) {
                $contient->setListe(null);
            }
        }

        return $this;
    }

    public function getUtilisateur(): ?User
    {
        return $this->utilisateur;
    }

    public function setUtilisateur(?User $utilisateur): self
    {
        $this->utilisateur = $utilisateur;

        return $this;
    }

    public function getTotal(): float
    {
        $total = 0;
        foreach ($this->getContient() as $contient) {
            $total += $contient->getPropose()->getPrix();
        }
        return $total;
    }

    public function getUnbuyedContient() : array
    {
        $unbuyedContient = [];
        foreach ($this->getContient() as $contient) {
            if (!$contient->isAchete()) {
                $unbuyedContient[] = $contient;
            }
        }
        return $unbuyedContient;
    }

    public function getBuyedContient() : array
    {
        $buyedContient = [];
        foreach ($this->getContient() as $contient) {
            if ($contient->isAchete()) {
                $buyedContient[] = $contient;
            }
        }
        return $buyedContient;
    }

}
