-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 05, 2018 at 08:24 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_gallery`
--

CREATE TABLE `tbl_gallery` (
  `gallery_id` tinyint(2) UNSIGNED NOT NULL,
  `gallery_name` varchar(100) NOT NULL,
  `gallery_title` varchar(250) NOT NULL,
  `gallery_original_img` varchar(50) NOT NULL,
  `gallery_web_image` varchar(50) NOT NULL,
  `gallery_description` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_gallery`
--

INSERT INTO `tbl_gallery` (`gallery_id`, `gallery_name`, `gallery_title`, `gallery_original_img`, `gallery_web_image`, `gallery_description`) VALUES
(1, 'gallery image 1', 'COMPETITION POSTER', 'work1.png', 'work1_thumb.png', '2018,JAN,17 WINTER :: LEE\'S COMPETITION PROMOTION POSTER GREATED BY ILLUSTRATOR'),
(2, 'gallery image 2', 'MUSIC ALBUM COVER IMAGE DESIGN', 'work2.png', 'work2_thumb.png', '2017,APRIL,17 WINTER :: LEE\'S MUSIC ALBUM COVER COVER PAGE DESIGN PROMOTION POSTER GREATED BY ILLUSTRATOR'),
(3, 'gallery image 3', 'SUNSET DRAWING', 'work3.png', 'work3_thumb.png', '2017,JUNE,20 SUMMER :: LEE\'S SUNSET DRAWING POSTER GREATED BY ILLUSTRATOR'),
(4, 'gallery image 4', 'ROKU WEB DESIGN', 'work4.png', 'work4_thumb.png', '2018,DEC,20 WINTER :: LEE\'S ROKU WEB DESIGN GREATED BY ILLUSTRATOR, PHOTOSHOP, AND XD'),
(5, 'gallery image 5', 'BUGATTI APP DESIGN', 'work5.png', 'work5_thumb.png', '2018,DEC,20 WINTER :: LEE\'S BUGATTI APP DESIGN GREATED BY ILLUSTRATOR, PHOTOSHOP, AND XD'),
(6, 'gallery image 6', 'BEER LABEL', 'work6.png', 'work6_thumb.png', '2018,DEC,20 WINTER :: LEE\'S BEER LABEL DESIGN GREATED BY ILLUSTRATOR, PHOTOSHOP, AND XD');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_gallery`
--
ALTER TABLE `tbl_gallery`
  ADD PRIMARY KEY (`gallery_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_gallery`
--
ALTER TABLE `tbl_gallery`
  MODIFY `gallery_id` tinyint(2) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
