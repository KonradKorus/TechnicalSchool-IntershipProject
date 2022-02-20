function highlight(x)
{
    document.getElementById(x).style.background='rgb(20,80,120)';
    document.getElementById(x+'2').style.background='rgba(0,0,0,0)';
}
function no_highlight(x)
{
    document.getElementById(x).style.background='rgba(0,0,0,0)';
    document.getElementById(x+'2').style.background='rgba(0,0,0,0)';
}

let hide=1;

function show_menu()
{   
     if(hide==1)
        {
            document.getElementById('menu').style.display='block';
            document.getElementById('menu1').style.display='none';
            document.getElementById('menu').style.animation='bok';
            document.getElementById('menu').style.animationDuration='1.5s';
            document.getElementById('back').style.display='block';
            hide=0;
        }
    else
    {
            document.getElementById('menu1').style.display='block';
            document.getElementById('menu').style.display='none';
            document.getElementById('back').style.display='none';

            hide=1;
    }
}
let spons=1;
window.setInterval(function sponsorzy()
{
    if (spons == 1) 
    {
        document.getElementById('patron2').style.display = "flex";
        document.getElementById('patron1').style.display = "none";
        spons = 0;
    } 
    else 
    {
        document.getElementById('patron2').style.display = "none";
        document.getElementById('patron1').style.display = "flex";
        spons = 1;
    }
} ,7000);
    
function set_iframe(x)
{    
    let wart=x;
    sessionStorage.setItem('akt', wart);
}
function loadIframe()
{
    let el=document.getElementById('iframe_akt');
    let wartosc=sessionStorage.getItem('akt');
 el.src=`../sites/Aktualności/${wartosc}.html`;

    if((wartosc=='miejskie_targi') || (wartosc=='targi_edukacyjne'))
        {
            el.height='1550';
        }
    else if((wartosc=='explory_2018') || (wartosc=='festiwal'))
            {
                el.height='1740';
            }
    else if(wartosc=='wizyta')
        {
            el.height='650';
        }
}

let prac=1;
function pracownie_show()
{
    if(prac==1)
        {
    document.getElementById('menu_pracownie').style.display='block';
    
    document.getElementById('pracownie_btn').innerHTML='Schowaj';
            prac=0;
        }
    else
    {
            
    document.getElementById('menu_pracownie').style.display='none';

    
    document.getElementById('pracownie_btn').innerHTML='Pracownie';
        prac=1;
    }

}
function schowaj()
{
    if(prac==0)
        {
             document.getElementById('menu_pracownie').style.display='none';

    
        document.getElementById('pracownie_btn').innerHTML='Pracownie';
        prac=1;
        }
}