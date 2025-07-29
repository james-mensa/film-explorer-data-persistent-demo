import CharacterInfoPage from "@/component/common/CharacterInfoPage";

 const CharacterPage=async({ params:props }: { params:Promise< { id: string }> })=> {
  const params=await props

  const id = Number(params.id);
  return ( <CharacterInfoPage id={id} />);
}

export default CharacterPage