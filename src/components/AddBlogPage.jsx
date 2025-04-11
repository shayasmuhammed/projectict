import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography
} from '@mui/material';

const AddBlogPage = () => {
  const formik = useFormik({
    initialValues: {
      blogName: '',
      author: '',
      description: ''
    },
    validationSchema: Yup.object({
      blogName: Yup.string().required('Blog name is required'),
      author: Yup.string().required('Author is required'),
      description: Yup.string().required('Description is required')
    }),
    onSubmit: (values,{resetForm}) => {
      console.log('Submitted:', values);
      alert('Blog submitted!');
      resetForm();
    }
  });

  return (
    <div className="p-6 flex justify-center items-start min-h-screen bg-gray-100">
      <Card className="w-full max-w-xl shadow-lg">
        <CardContent>
          <Typography variant="h5" component="div" className="mb-4 font-semibold text-center">
            Add New Blog
          </Typography>

          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <TextField
              label="Blog Name"
              name="blogName"
              value={formik.values.blogName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.blogName && Boolean(formik.errors.blogName)}
              helperText={formik.touched.blogName && formik.errors.blogName}
              fullWidth
            />

            <TextField
              label="Author"
              name="author"
              value={formik.values.author}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.author && Boolean(formik.errors.author)}
              helperText={formik.touched.author && formik.errors.author}
              fullWidth
            />

            <TextField
              label="Description"
              name="description"
              multiline
              rows={4}
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
              fullWidth
            />

            <Button type="submit" variant="contained" color="primary">
              Submit Blog
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddBlogPage;
