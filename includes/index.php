<?php
require 'functions.php';

  $data = open_gallery($conn);
  echo json_encode($data);

?>