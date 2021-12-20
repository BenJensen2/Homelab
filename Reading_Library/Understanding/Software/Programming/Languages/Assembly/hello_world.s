    global _start         ; This exports _start label and
                          ; makes entry point to the programing
    ; ##########################
    ; code
    ; ##########################
    section .text
_start: 
    ; ##########################
    ; write(1, message, length)
    ; ##########################
    mov  rax, 1              ; system call for write
    mov  rdi, 1              ; making file handle stdout
    mov  rsi, message        ; passing adress of string to output
    mov  rdx, length         ; number of bytes
    syscall                  ; invoking os to write

    ; ##########################
    ; exit(0)
    ; ##########################
    mov rax, 60             ; sys call for exit
    xor rdi, rdi            ; exit code 0
    syscall                 ; invoke os to exit

    ; ##########################
    ; Variables
    ; ##########################
    section .data   
message: db "Hello, World", 0xa ; const char * message = "Hello, World"oxa is "\n"
length: equ $-message;  int length= len(message) =12; 