<?php

namespace App\Entity;

use App\Lib\FormValue;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class FormValues
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: Types::BIGINT)]
    private int $id;

    #[ORM\ManyToOne(targetEntity: Form::class)]
    private Form $form;

    #[ORM\Column(type: Types::JSON)]
    private Collection $values;

    public function __construct()
    {
        $this->values = new ArrayCollection();
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return FormValues
     */
    public function setId(int $id): FormValues
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return Form
     */
    public function getForm(): Form
    {
        return $this->form;
    }

    /**
     * @param Form $form
     * @return FormValues
     */
    public function setForm(Form $form): FormValues
    {
        $this->form = $form;
        return $this;
    }

    /**
     * @return Collection
     */
    public function getValues(): Collection
    {
        return $this->values;
    }

    public function addValue(FormValue $value): FormValues
    {
        if (!$this->values->contains($value)) {
            $this->values->add($value);
        }
        return $this;
    }

    public function removeValue(FormValue $value): FormValues
    {
        if ($this->values->contains($value)) {
            $this->values->removeElement($value);
        }
        return $this;
    }

}