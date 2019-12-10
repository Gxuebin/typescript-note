declare namespace declareNamespace {
    const name: string;    
    function showName(name: string): void;
    class Gender {
        showGender(gender: string): void;
    }
    enum Direction { up, right, down, left } 
    namespace ns {
        function showNs(name: string): void;
    }
}
