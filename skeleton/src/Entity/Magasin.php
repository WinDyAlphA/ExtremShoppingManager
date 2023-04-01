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
    private Collection $proposess;

    #[ORM\Column(nullable: true)]
    private ?float $GPSlong = null;

    #[ORM\Column(nullable: true)]
    private ?float $GPSlat = null;


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
    public function getProposess(): Collection
    {
        return $this->proposess;
    }

    public function addProposess(Propose $proposess): self
    {
        if (!$this->proposess->contains($proposess)) {
            $this->proposess->add($proposess);
            $proposess->setMagasin($this);
        }

        return $this;
    }

    public function removeProposess(Propose $proposess): self
    {
        if ($this->proposess->removeElement($proposess)) {
            // set the owning side to null (unless already changed)
            if ($proposess->getMagasin() === $this) {
                $proposess->setMagasin(null);
            }
        }

        return $this;
    }

    public function getGPSlong(): ?float
    {
        return $this->GPSlong;
    }

    public function setGPSlong(?float $GPSlong): self
    {
        $this->GPSlong = $GPSlong;

        return $this;
    }

    public function getGPSlat(): ?float
    {
        return $this->GPSlat;
    }

    public function setGPSlat(?float $GPSlat): self
    {
        $this->GPSlat = $GPSlat;

        return $this;
    }

   
}
