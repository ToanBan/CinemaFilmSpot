<!DOCTYPE html>
<html lang="en" style="background-color: #f2f8fc;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    @vite(['resources/js/admin.jsx'])
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="path/to/your/bundle.js"></script> <!-- Your React app bundle -->
</head>
<body>
    <div class="root-admin" style="display:flex;background-color: #f2f8fc;"></div>
</body>
</html>