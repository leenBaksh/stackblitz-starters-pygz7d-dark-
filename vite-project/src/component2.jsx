import Component3 from './component3';

export default function Component2(props) {
  return (
    <>
      <div className="boundary">
        <h1>Videos</h1>
        <Component3 darkMode={props.darkMode} />
      </div>
    </>
  );
}
