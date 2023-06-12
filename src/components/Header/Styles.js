
const headerStyles = {
    title: {
        display:{xl:'none ', sm: 'block'},
      },
      search: {
        position: 'relative',
        borderRadius: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.25)' },
        marginRight: '16px',
        marginLeft:{xl: '24px', sm: 0},
        width:{ xl: '100%',sm: 'auto' } ,
      },
      searchIcon: {
        padding: '0,16px', height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: '8px,8px,8px,0px', paddingLeft: `calc(1em + 32px) !important`, width:{ md:'100%',  sm: '20ch' },
      },
      toolbar: {
        display: 'flex', justifyContent: 'space-between',
      },
}

export default headerStyles