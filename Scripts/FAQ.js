const SCREEN_WIDTH_FOR_RESIZING_TABS = 500;

const ATTR_POSITION = "position";

const CLASS_ACTIVE="Active";
const CLASS_SHOW_INDICATOR=".ShowedIndicator";
const CLASS_CONTENT=".Content";
const CLASS_SELECTED = "Selected";
const CLASS_TABS__BUTTON = ".Tabs Button";
const ID_FAQ_CLASS_CONTAINER = "#FAQ .Container";
const ID_FAQ_CLASS_TABS = "#FAQ .Tabs";
const CLASS_BLOCK = ".Block";

const EVENT_LOAD = "load";
const EVENT_RESIZE = "resize";

const CSS_HEIGHT = "height";

const PX = "px";
const EMPTY = "";
const OPEN_SUBMENU = "+";
const CLOSE_SUBMENU = "-";

$(CLASS_BLOCK).click(OpenSubMenu);
$(CLASS_TABS__BUTTON).click(ActiveTab);

//REsive the tabs container in function of the screen size
$(window).on(EVENT_LOAD, ResizeTabsContainer);
$(window).on(EVENT_RESIZE, ResizeTabsContainer);

var tabPosition;

function ResizeTabsContainer()
{
	var lButton;
	var lTabsSizeCSS = EMPTY;
	$(ID_FAQ_CLASS_TABS).each(function(){
		if($(window).width() <= SCREEN_WIDTH_FOR_RESIZING_TABS)
		{
			lButton = $(this).children(CLASS_TABS__BUTTON);
			lTabsSizeCSS = lButton.length * parseInt(lButton.css(CSS_HEIGHT).replace(PX,EMPTY)) + PX; 
		}
		
		$(this).css(CSS_HEIGHT, lTabsSizeCSS); 
	});
}

//Open or close the submenu of the fack
function OpenSubMenu()
{
	if($(this).hasClass(CLASS_ACTIVE))
	{
		$(this).removeClass(CLASS_ACTIVE);
		$(this).children(CLASS_SHOW_INDICATOR).text(OPEN_SUBMENU);
		$(this).children(CLASS_CONTENT).slideUp();
	}
	else
	{
		$(this).addClass(CLASS_ACTIVE);
		$(this).children(CLASS_SHOW_INDICATOR).text(CLOSE_SUBMENU);
		$(this).children(CLASS_CONTENT).slideDown();
	}
}

//Actuve a tab and show it content
function ActiveTab()
{
	if(!$(this).hasClass(CLASS_SELECTED))
	{
		if($(CLASS_TABS__BUTTON).hasClass(CLASS_SELECTED))
		{
			$(CLASS_TABS__BUTTON).removeClass(CLASS_SELECTED);
		}
		$(this).addClass(CLASS_SELECTED);
		
		tabPosition = $(this).attr(ATTR_POSITION);
		
		$(ID_FAQ_CLASS_CONTAINER).each(ShowContainer);
	}
}

//SHow the content of a tab
function ShowContainer()
{
	if($(this).attr(ATTR_POSITION) === tabPosition)
	{
		$(this).addClass(CLASS_SELECTED);
	}
	else if($(this).hasClass(CLASS_SELECTED))
	{
		$(this).removeClass(CLASS_SELECTED);
	}
}