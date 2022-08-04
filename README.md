# FAQ_js
Frequently Asked Questions element shown in your website, the responsive is managed.

<hr>

For use it create a Div which has the ID **#FAQ**

```html 
<div id ="FAQ"></div>
```
First of all you will have to define your tabs, for that you need a div with the class **.Tabs** it has to be into the div **#FAQ** in the div **.Tabs** define a button per tab each button has to have the attribute **position** (write unic value in each attribute) the first tab need the class **.FirstTab** and, if the tab is selected when you open your website's page, it will need the class **.Selected**.

```html 
<div id ="FAQ">
	<div class="Tabs">
		<button position="First" class="Selected FirstTab">Tab 1</button>
		<button position="Second">Tab 2</button>
	</div>
</div>
```

After that you will need containers, one container per tabs, a tab show a container. For define one you need a div with the class **.Container** it will need the attribute **position** write the same value of the tab you want to link with this container. Add the class **.Selected** for the container shown when you open your website's page.

```html 
<div id ="FAQ">
	<div class="Tabs">
		<button position="First" class="Selected FirstTab">Tab 1</button>
		<button position="Second">Tab 2</button>
	</div>
	<div position="First" class="Container Selected"></div>
	<div position="Second" class="Container"></div>
</div>
```

Every containers will contain blocks, each blocks represent questions and answers you want in your FAQ, a block has a specific structure.

```html 
<div class="Block">
	<span class="Title">My question ?</span> 
	<span class="ShowedIndicator">+</span>
	<br>
	<hr>
	<br>
	<div class="Content">
		My answer.
	</div>
	<br>
</div>
```

For explain the Title represent the question you want to answer. First time you see the Block, you see only the title, when you click on it the show indicator become '-' and the answer appeard. If you click again the show indicator become + again and you just see the question only.

So a block just need the class **.Block**.

The title need the class **.Title**.

The show indicator as to be write like in the example.

```html 
<span class="ShowedIndicator">+</span>
	
```

And the answer just need the class **.Content**.

```html 
<div id ="FAQ">
	<div class="Tabs">
		<button position="First" class="Selected FirstTab">Tab 1</button>
		<button position="Second">Tab 2</button>
	</div>
	<div position="First" class="Container Selected">
		<div class="Block">
			<span class="Title">My question 1 ?</span> 
			<span class="ShowedIndicator">+</span>
			<br>
			<hr>
			<br>
			<div class="Content">
				My answer 1.
			</div>
			<br>
		</div>
		<div class="Block">
			<span class="Title">My question 2 ?</span> 
			<span class="ShowedIndicator">+</span>
			<br>
			<hr>
			<br>
			<div class="Content">
				My answer 2.
			</div>
			<br>
		</div>
		<div class="Block">
			<span class="Title">My question 3 ?</span> 
			<span class="ShowedIndicator">+</span>
			<br>
			<hr>
			<br>
			<div class="Content">
				My answer 3.
			</div>
			<br>
		</div>
	</div>
	<div position="Second" class="Container">
		<div class="Block">
			<span class="Title">My question 4 ?</span> 
			<span class="ShowedIndicator">+</span>
			<br>
			<hr>
			<br>
			<div class="Content">
				My answer 4.
			</div>
			<br>
		</div>
		<div class="Block">
			<span class="Title">My question 4 ?</span> 
			<span class="ShowedIndicator">+</span>
			<br>
			<hr>
			<br>
			<div class="Content">
				My answer 4.
			</div>
			<br>
		</div>
	</div>
</div>
```

*You can add many block as you want.*
<hr>

This repository contains the js script, a css specific to the FAQ and an example.

Enjoy :)

<hr>

*<sub>Made with jquery-3.6.0, the script can't work without jquery</sub>*
