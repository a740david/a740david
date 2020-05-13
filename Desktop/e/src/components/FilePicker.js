import React from 'react';
import Uppy from '@uppy/core';
import GoogleDrive from '@uppy/google-drive';
import { Dashboard } from '@uppy/react'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'

const uppy = Uppy({
	restrictions: {
		allowedFileTypes: ['.csv']
	}
})
	.use(GoogleDrive, { id: 'GoogleDrive', companionUrl: 'https://companion.uppy.io' })

const FilePicker = ({ onChange }) => {
	uppy.on('complete', (result) => {
		onChange(result.successful[0].data);
	});

	return (
		<Dashboard 
			uppy={uppy}
			plugins={['GoogleDrive']}>
		</Dashboard>
	)
}

export default FilePicker;
