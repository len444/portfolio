import '../index.css'

interface Props {
  title: string;
  imgUrl: string;
  class: string;
  handleClick: any;
}

function ProjectTile(props: Props) {
  return (
    <>
      <img
        src={props.imgUrl}
        className={props.class + ' project-tile-images'}
        onClick={() => props.handleClick(props.title)}
      />
    </>
  )
}

export default ProjectTile;