<?php

namespace OCA\Recognize;

class Constants {
	public const IMAGE_FORMATS = ['image/jpeg', 'image/png', 'image/bmp', 'image/heic', 'image/heif', 'image/tiff'];
	public const AUDIO_FORMATS = ['audio/mpeg', 'audio/mp4', 'audio/ogg', 'audio/vnd.wav', 'audio/flac'];
	public const VIDEO_FORMATS = ['image/gif', 'video/mp4', 'video/MP2T', 'video/x-msvideo', 'video/x-ms-wmv', 'video/quicktime', 'video/ogg', 'video/mpeg', 'video/webm', 'video/x-matroska'];
	public const DIRECTORY_FORMATS = ['httpd/unix-directory'];
	public const OCTET_STREAM_FORMATS = ['application/octet-stream'];
	public const MAX_FILE_SIZE = 10000000;
}
