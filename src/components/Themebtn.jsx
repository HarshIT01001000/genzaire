import useTheme from "../context/theme"


function ThemeBtn() {
    const {themeMode, lightTheme, darkTheme}=useTheme()
const onChangeBtn = (e)=>{
  const darkThemeStatus= e.currentTarget.checked
  if(darkThemeStatus){
    darkTheme()
  }
  else{
    lightTheme()
  }
}

    return(
        <>
<div><input onChange={onChangeBtn} type="checkbox" value="" checked={themeMode==="dark"} className="toggle theme-controller" /></div>
        </>
    )
}
export default ThemeBtn