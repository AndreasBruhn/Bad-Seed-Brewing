import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

export default function ProductOptions({ name, values, selectedOptions, setOptions }) {
	const [selected, setSelected] = useState(`Vælg et ${name}...`);

	return (
		<fieldset className='mt-3'>
			<legend className='text-xl font-semibold'>{name}</legend>
			<div className='inline-flex items-center flex-wrap'>
				{values.map((value) => {
					const id = `option-${name}-${value}`;
					const checked = selectedOptions[name] === value; // check for equality

					return (
						<label key={id} htmlFor={id}>
							<input
								className='sr-only'
								type='radio'
								id={id}
								name={`option-${name}`}
								value={value}
								checked={checked}
								onChange={() => {
									setOptions(name, value);
								}}
							/>
							{/* CONDITIONAL CHECK TO APPLY STYLING */}
							<div
								className={`p-2 mt-3 text-lg rounded-full block cursor-pointer mr-3 ${
									checked ? 'text-white bg-gray-900' : 'text-gray-900 bg-gray-200'
								}`}
							>
								<span className='px-2'>{value}</span>
							</div>
						</label>
					);
				})}
			</div>
		</fieldset>
	);
}
