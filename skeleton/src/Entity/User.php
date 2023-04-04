<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
#[UniqueEntity(fields: ['pseudo'], message: 'There is already an account with this pseudo')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180)]
    private ?string $uuid = null;

    #[ORM\Column]
    private array $roles = [];

    #[ORM\Column(unique: true)]

    private ?string $pseudo = null;

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[ORM\OneToMany(mappedBy: 'utilisateur', targetEntity: Liste::class)]
    private Collection $liste;

    public function __construct()
    {
        $this->liste = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUuid(): ?string
    {
        return $this->uuid;
    }

    public function setUuid(string $uuid): self
    {
        $this->uuid = $uuid;

        return $this;
    }
    public function getPseudo(): ?string
    {
        return $this->pseudo;
    }
    public function setPseudo(string $pseudo): self
    {
        $this->pseudo = $pseudo;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->uuid;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    /**
     * @return Collection<int, Liste>
     */
    public function getListe(): Collection
    {
        return $this->liste;
    }

    public function addListe(Liste $liste): self
    {
        if (!$this->liste->contains($liste)) {
            $this->liste->add($liste);
            $liste->setUtilisateur($this);
        }

        return $this;
    }

    public function removeListe(Liste $liste): self
    {
        if ($this->liste->removeElement($liste)) {
            // set the owning side to null (unless already changed)
            if ($liste->getUtilisateur() === $this) {
                $liste->setUtilisateur(null);
            }
        }

        return $this;
    }

    public function getUnbuyedContient(): array
    {
        // Get all the listes
        $listes = $this->getListe();
        $contients = [];
        foreach ($listes as $liste) {
            $contients = array_merge($contients, $liste->getUnbuyedContient());
        }
        return $contients;
    }

    public function getBuyedContient(): array
    {
        // Get all the listes
        $listes = $this->getListe();
        $contients = [];
        foreach ($listes as $liste) {
            $contients = array_merge($contients, $liste->getBuyedContient());
        }
        return $contients;
    }

    public function getTotalSpend(): float
    {
        $total = 0;
        foreach ($this->getBuyedContient() as $contient) {
            $total += $contient->getPropose()->getPrix();
        }
        return $total;
    }

    public function getContient(): array
    {
        $contients = [];
        foreach ($this->getListe() as $liste) {
            $persistantCollection = $liste->getContient();
            $contients = array_merge($contients, $persistantCollection->toArray());
        }
        return $contients;
    }

    public function getMostExpensiveArticle(): ?Contient
    {
        $contients = $this->getContient();
        $mostExpensive = null;
        foreach ($contients as $contient) {
            if ($mostExpensive === null || $contient->getPropose()->getPrix() > $mostExpensive->getPropose()->getPrix()) {
                $mostExpensive = $contient;
            }
        }
        return $mostExpensive;
    }

    public function getCheapestArticle(): ?Contient
    {
        $contients = $this->getContient();
        $cheapest = null;
        foreach ($contients as $contient) {
            if ($cheapest === null || $contient->getPropose()->getPrix() < $cheapest->getPropose()->getPrix()) {
                $cheapest = $contient;
            }
        }
        return $cheapest;
    }
}
