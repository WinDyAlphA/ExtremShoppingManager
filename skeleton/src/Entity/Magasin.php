<?php

namespace App\Entity;

use App\Repository\MagasinRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MagasinRepository::class)]
class Magasin
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    #[ORM\Column(length: 255)]
    private ?string $localisation = null;

    #[ORM\OneToMany(mappedBy: 'magasin', targetEntity: Propose::class)]
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

    public function getLocalisation(): ?string
    {
        return $this->localisation;
    }

    public function setLocalisation(string $localisation): self
    {
        $this->localisation = $localisation;

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
            $propose->setMagasin($this);
        }

        return $this;
    }

    public function removePropose(Propose $propose): self
    {
        if ($this->proposes->removeElement($propose)) {
            // set the owning side to null (unless already changed)
            if ($propose->getMagasin() === $this) {
                $propose->setMagasin(null);
            }
        }

        return $this;
    }
}
