if (typeof window === "object"){
	// ---
// Global elements.

	const $html = document.documentElement;
	let $header = document.getElementById('masthead');

// ---
// Breakpoints defined in css
	const BREAKPOINTS = {
		xs: Number(
			getComputedStyle(document.documentElement)
				.getPropertyValue('--width-xs')
				.replace(/\D/g, '')
		),
		sm: Number(
			getComputedStyle(document.documentElement)
				.getPropertyValue('--width-sm')
				.replace(/\D/g, '')
		),
		md: Number(
			getComputedStyle(document.documentElement)
				.getPropertyValue('--width-md')
				.replace(/\D/g, '')
		),
		lg: Number(
			getComputedStyle(document.documentElement)
				.getPropertyValue('--width-lg')
				.replace(/\D/g, '')
		),
		xl: Number(
			getComputedStyle(document.documentElement)
				.getPropertyValue('--width-xl')
				.replace(/\D/g, '')
		),
		xxl: Number(
			getComputedStyle(document.documentElement)
				.getPropertyValue('--width-xxl')
				.replace(/\D/g, '')
		),
	};

	(function () {
		const page = document.querySelector('.page');

		window.addEventListener('scroll', () => {
			if (window.scrollY > 5) {
				page.classList.add('scrolled');
			} else {
				page.classList.remove('scrolled');
			}
		});
	})();

// ---
// Basic function for for showing svg in img tags
	(function () {
		const replaceImage = function ($image) {
			if (!$image || /^data:/.test($image.src)) return;

			const xhr = new XMLHttpRequest();
			xhr.open('GET', $image.src);
			xhr.onload = function (e) {
				if (xhr.status === 200 && !!(xhr.responseXML || {}).documentElement) {
					const $svg = xhr.responseXML.documentElement;

					// take over all attributes
					[].forEach.call($image.attributes, function (attribute) {
						// igmore these attributes
						if (['src'].indexOf(attribute.name) >= 0) return;
						// set classNames
						else if (attribute.name === 'class')
							$image.classList.forEach(className =>
								$svg.classList.add(className)
							);
						// set all other attributes
						else $svg.setAttribute(attribute.name, attribute.value);
					});

					$svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');

					$svg.classList.remove('inline-svg', 'lazyload', 'lazyloading');

					// replace image with svg
					if ($image && $image.parentElement) {
						$image.parentElement.replaceChild($svg, $image);

						const $figure = $svg.closest('.inline-svg');
						if ($figure) $figure.classList.remove('inline-svg');

						window.requestAnimationFrame(() =>
							window.dispatchEvent(new CustomEvent('inline-svg', {detail: $svg}))
						);
					}
				}
			};
			xhr.send('');
		};

		let $images; // get images
		$images = document.getElementsByTagName('img');
		[].forEach.call($images, function ($image) {
			if (
				!(
					$image.classList.contains('inline-svg') || $image.closest('.inline-svg')
				)
			)
				return;

			replaceImage($image);
			$image.addEventListener(
				'load',
				function (e) {
					replaceImage(e.target);
				},
				{passive: true}
			);
		});
	})();

// ---
// Custom select box
// (function () {
// 	const selectHeader = document.querySelector('.select__header');
// 	const selectItem = document.querySelectorAll('.select__item');

// 	selectHeader.addEventListener('click', selectToggle);

// 	selectItem.forEach(item => {
// 		item.addEventListener('click', selectChoose);
// 	});

// 	function selectToggle() {
// 		this.parentElement.classList.toggle('is-active');
// 	}

// 	function selectChoose() {
// 		let text = this.innerText,
// 			select = this.closest('.select'),
// 			currentText = select.querySelector('.select__current');
// 		currentText.innerText = text;
// 		select.classList.remove('is-active');
// 	}
// })();

// ---
// Custom select box
	(function () {
		const customSelectInit = $select => {
			$select.style.display = 'none';
			customSelect('select[name="' + $select.name + '"]');
		};

		const observer = new MutationObserver(function (entries) {
			entries.forEach(entry => {
				entry.addedNodes.forEach($node => {
					if ($node.nodeName === 'FORM') {
						let $selects = $node.querySelectorAll('select');
						$selects.forEach($select => {
							customSelectInit($select);
						});
					}
				});
			});
		});

		const $blocksHasForm = document.querySelectorAll('.has-form');
		if ($blocksHasForm.length === 0) return;

		$blocksHasForm.forEach($blockHasForm => {
			let $form = $blockHasForm.querySelector('form');

			if ($form) {
				// If form is already in dom ...
				let $selects = $form.querySelectorAll('select');
				$selects.forEach($select => {
					customSelectInit($select);
				});
			} else {
				// If form will be appended after dom ready ...
				observer.observe($blockHasForm, {
					subtree: true,
					childList: true,
				});
			}
		});

		const customSelectContainer = document.querySelector(
			'.custom-select-container'
		);
		const customSelectOpener = document.querySelector('.custom-select-opener');

		document.body.addEventListener('click', function (event) {
			// Если клик был сделан вне области выпадающего списка, сбрасываем класс is-open и custom-select-opener--open
			if (!customSelectContainer.contains(event.target)) {
				customSelectContainer.classList.remove('is-open');
				customSelectOpener.classList.remove('custom-select-opener--open');
			}
		});

		customSelectOpener.addEventListener('click', function (event) {
			event.stopPropagation();
			customSelectContainer.classList.toggle('is-open');
			customSelectOpener.classList.toggle('custom-select-opener--open');
		});
	})();

}