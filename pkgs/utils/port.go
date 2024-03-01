package utils

import "os"

func GetPort() string {
	// define port on containerization
	PORT := os.Getenv("RTFPORT")
	if PORT == "" {
		PORT = ":8080"
	}
	return PORT
}
