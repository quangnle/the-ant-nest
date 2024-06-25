import Bug from "@/core/entity/bug";
import { Checkbox, Field, Label } from "@headlessui/react";
import { FC } from "preact/compat";
import BorderContainer from "../border-container";
import Button from "../common/button";
import Modal from "../common/modal";
import { useState } from "react";

interface IProp {
  bugs: Bug[];
  showFilter: boolean;
  handleSelectByGenes?: (genes: IAppearance[]) => void;
  handleClose?: () => void;
}

const FilterGeneModal: FC<IProp> = ({
  handleClose,
  bugs,
  handleSelectByGenes,
  showFilter,
}) => {
  const [selectedGenes, setSelectedGenes] = useState<IAppearance[]>([]);

  const handleFilterGenes = () => {
    let bugGenes = new Set<IAppearance>();
    bugs.map((bug) => bug.genes.flatMap((gene) => bugGenes.add(gene)));
    const bugGeneArr = Array.from(bugGenes);
    const uniqueArr = bugGeneArr
      .filter(
        (item, index) =>
          bugGeneArr.findIndex((gene) => gene._id === item._id) === index
      )
      .map((gene) => gene);
    return uniqueArr.map((gene) => (
      <Field key={gene._id} className="flex items-center gap-2">
        <Checkbox
          checked={Boolean(
            selectedGenes.find((_gene) => _gene._id === gene._id)
          )}
          onChange={(checked) => {
            if (checked) {
              setSelectedGenes((prev: IAppearance[]) => [...prev, gene]);
            } else {
              setSelectedGenes((prev: IAppearance[]) =>
                prev.filter((x) => x !== gene)
              );
            }
          }}
          className="group block size-4 rounded border bg-white data-[checked]:bg-[#de9f00]"
        >
          <svg
            className="stroke-white opacity-0 group-data-[checked]:opacity-100"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Checkbox>
        <Label className="text-white">{gene.name}</Label>
      </Field>
    ));
  };

  return (
    <>
      {showFilter && (
        <Modal handleClose={handleClose}>
          <BorderContainer className="bg-black/60 p-4">
            <h1 className="font-bold text-center mb-6">Filter to select</h1>
            <div className="flex flex-col gap-2">{handleFilterGenes()}</div>
            <div className="flex justify-end mt-4">
              <Button
                onClick={() =>
                  selectedGenes.length > 0 &&
                  handleSelectByGenes &&
                  handleSelectByGenes(selectedGenes)
                }
              >
                Select
              </Button>
            </div>
          </BorderContainer>
        </Modal>
      )}
    </>
  );
};

export default FilterGeneModal;
