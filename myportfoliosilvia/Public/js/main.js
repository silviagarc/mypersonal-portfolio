'use strict'

document.addEventListener('DOMContentLoaded', function () {
	// I'm going to indicate to the user that he has the horizontal orientation, rotate his cell phone for a better user experience
	if (window.height < 500) alert('Recomendación: Rota tu smartphone para una mejor experiencia.')

	// Menu Items
	let menuItems = Array.from(document.querySelectorAll('.menu-list__link')).filter(item => item.hash)
	let mySelfMenuItems = Array.from(document.querySelectorAll('.myself__menu__link')).filter(item => item.hash)
	// Hamburguers
	let btnMenu = document.querySelector('.myself__menu__action')
	let ControlActions = document.querySelector('.control-actions')
	let ControlBtnMenu = document.querySelector('.control-actions__menu')
	// Blanket Body
	let blanketBody = document.querySelector('.blanketBody')
	// Container Menu
	let containerMenu = document.querySelector('.myself__container__menu')
	let containerMySelf = document.querySelector('.container__myself')

	function ActiveMenuItems (classActive, classMenuItem) {
		// I will validate if the item being clicked on is not active
		if (!this.classList.contains(classActive)) {
			// Get an array of menu items (NodeList -> Array)
			let menu = Array.from(document.querySelectorAll(classMenuItem))
			// Let's find the item that is selected
			let selectedItem = menu.find(item => item.classList.contains(classActive))

			// If the clicked item is the start
			if (this.hash === '#home') {
				// We look for the article of the selected item
				let selectedArticle = document.querySelector(selectedItem.hash)
				// And we both remove the classes that make them visible
				selectedItem.classList.remove(classActive)
				selectedArticle.classList.remove('article--show')
				selectedArticle.classList.add('article--hide')
				setTimeout(function () {
					selectedArticle.style.display = 'none'
				}, 510)
			} else {
				// Otherwise, we proceed to do the same
				selectedItem.classList.remove(classActive)
				// But if the element that is selected is different the start
				if (selectedItem.hash !== '#home') {
					// I will proceed to hide the article
					let selectedArticle = document.querySelector(selectedItem.hash)

					selectedArticle.classList.remove('article--show')
					selectedArticle.classList.add('article--hide')
					setTimeout(function () {
						selectedArticle.style.display = 'none'
					}, 510)
				}

				// Lastly, we capture the item of the item being clicked
				let article = document.querySelector(this.hash)
				// And we show the article
				article.classList.add('article--show')
				article.classList.remove('article--hide')
				setTimeout(() => {
					article.style.display = 'flex'
				}, 520)
			}
			// Add the active class to the menu item
			this.classList.add(classActive)
		}
	}

	menuItems.forEach(function (m_item) {
		m_item.addEventListener('click', function (e) {
			e.preventDefault()

			ActiveMenuItems.apply(this, ['menu-list__link--active', '.menu-list__link'])
		})
	})

	mySelfMenuItems.forEach(function (m_item) {
		m_item.addEventListener('click', function (e) {
			e.preventDefault()

			if (this.hash === '#home') {
				containerMySelf.style.display = "block"
				blanketBody.style.display = "none"
				containerMenu.style.left = "-100%"
				containerMenu.style.transition = "left .5s ease"
				setTimeout(() => {
					containerMySelf.style.opacity = "1"
					ControlActions.style.display = "none"
				}, 1)
			} else {
				blanketBody.style.display = "none"
				containerMenu.style.left = "-100%"
				containerMenu.style.transition = "left .5s ease"
				containerMySelf.style.transition = "opacity .5s ease-in"
				containerMySelf.style.opacity = "0"
				setTimeout(() => {
					containerMySelf.style.display = "none"
					ControlActions.style.display = "flex"
				}, 505)
			}

			ActiveMenuItems.apply(this, ['myself__menu__link--active', '.myself__menu__link'])
		})
	})

	btnMenu.addEventListener('click', function () {
		blanketBody.style.display = "block"

		containerMenu.style.left = 0
		containerMenu.style.transition = "left .5s ease"
	})
	ControlBtnMenu.addEventListener('click', function () {
		blanketBody.style.display = "block"

		containerMenu.style.left = 0
		containerMenu.style.transition = "left .5s ease"
	})

	blanketBody.addEventListener('click', function () {
		blanketBody.style.display = "none"

		containerMenu.style.left = "-100%"
		containerMenu.style.transition = "left .5s ease"
	})
})

// Add the window load event to hide the loader once the whole page is loaded
window.addEventListener('load', e => {
	let loader = document.querySelector('.loader')
	let message = document.querySelector('.loader__message')

	setTimeout(function () {
		message.textContent = '¡Portfolio done!'
		clearTimeout(this)
	}, 1500)

	setTimeout(function () {
		loader.style.transition = 'opacity .8s ease-out'
		loader.style.opacity = '0'
		clearTimeout(this)
	}, 1700)

	setTimeout(function () {
		loader.style.display = 'none'
		clearTimeout(this)
	}, 2500)
})
