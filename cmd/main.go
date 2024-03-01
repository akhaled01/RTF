package main

import (
	"RTF/pkgs/utils"
	"fmt"
	"log"
	"net/http"
	"runtime"
)

var PORT string = utils.GetPort()

func main() {
	if runtime.Version() != "go1.22.0" {
		log.Fatal("Golang Version Must Be 1.22.0")
	}

	// HANDLERS
	mux := http.NewServeMux()

	fmt.Println("RESTful API is Live on PORT", PORT)
	log.Fatal(http.ListenAndServe(PORT, mux))
}
