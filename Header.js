import React, { useReducer } from 'react';
import Link from 'next/link'

const Nav = () => {
	const [isOpen, toggle] = useReducer(open => !open, false);
	return (
		<header className="bg-primary">
			<a id="site" href="/" rel="home">Site</a>
			<button id="menu-toggler" className={"icon icon-"+ `${isOpen ? 'menu' : 'cancel'}`} onClick={() => toggle()}>
			</button>
			<nav id="menu" className={"menu "+ `${isOpen ? 'show' : 'hidden'}`}>
				<ul>
					<Menu/>
				</ul>
			</nav>
		</header>
	)
}

export default Nav
