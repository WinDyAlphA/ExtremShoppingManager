<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230307101504 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE article (id INT AUTO_INCREMENT NOT NULL, type_id INT DEFAULT NULL, nom VARCHAR(255) NOT NULL, INDEX IDX_23A0E66C54C8C93 (type_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE contient (id INT AUTO_INCREMENT NOT NULL, propose_id INT DEFAULT NULL, liste_id INT DEFAULT NULL, quantite INT NOT NULL, achete TINYINT(1) NOT NULL, INDEX IDX_DC302E56FC1D5802 (propose_id), INDEX IDX_DC302E56E85441D8 (liste_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE liste (id INT AUTO_INCREMENT NOT NULL, utilisateur_id INT DEFAULT NULL, titre VARCHAR(255) NOT NULL, description VARCHAR(255) DEFAULT NULL, INDEX IDX_FCF22AF4FB88E14F (utilisateur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE magasin (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, localisation VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE propose (id INT AUTO_INCREMENT NOT NULL, article_id INT DEFAULT NULL, magasin_id INT DEFAULT NULL, prix INT NOT NULL, INDEX IDX_3DF2D0607294869C (article_id), INDEX IDX_3DF2D06020096AE3 (magasin_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE type (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `user` (id INT AUTO_INCREMENT NOT NULL, uuid VARCHAR(180) NOT NULL, roles JSON NOT NULL, pseudo VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649D17F50A6 (uuid), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE article ADD CONSTRAINT FK_23A0E66C54C8C93 FOREIGN KEY (type_id) REFERENCES type (id)');
        $this->addSql('ALTER TABLE contient ADD CONSTRAINT FK_DC302E56FC1D5802 FOREIGN KEY (propose_id) REFERENCES propose (id)');
        $this->addSql('ALTER TABLE contient ADD CONSTRAINT FK_DC302E56E85441D8 FOREIGN KEY (liste_id) REFERENCES liste (id)');
        $this->addSql('ALTER TABLE liste ADD CONSTRAINT FK_FCF22AF4FB88E14F FOREIGN KEY (utilisateur_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE propose ADD CONSTRAINT FK_3DF2D0607294869C FOREIGN KEY (article_id) REFERENCES article (id)');
        $this->addSql('ALTER TABLE propose ADD CONSTRAINT FK_3DF2D06020096AE3 FOREIGN KEY (magasin_id) REFERENCES magasin (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE article DROP FOREIGN KEY FK_23A0E66C54C8C93');
        $this->addSql('ALTER TABLE contient DROP FOREIGN KEY FK_DC302E56FC1D5802');
        $this->addSql('ALTER TABLE contient DROP FOREIGN KEY FK_DC302E56E85441D8');
        $this->addSql('ALTER TABLE liste DROP FOREIGN KEY FK_FCF22AF4FB88E14F');
        $this->addSql('ALTER TABLE propose DROP FOREIGN KEY FK_3DF2D0607294869C');
        $this->addSql('ALTER TABLE propose DROP FOREIGN KEY FK_3DF2D06020096AE3');
        $this->addSql('DROP TABLE article');
        $this->addSql('DROP TABLE contient');
        $this->addSql('DROP TABLE liste');
        $this->addSql('DROP TABLE magasin');
        $this->addSql('DROP TABLE propose');
        $this->addSql('DROP TABLE type');
        $this->addSql('DROP TABLE `user`');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
