import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AuthHeader from "@/components/layout/AuthHeader";
import useAuth from "@/hooks/useAuth";
import { toast } from "sonner";
import { Trash2, Plus } from "lucide-react";

interface Country {
  id: string;
  name: string;
  flag_emoji: string;
  description: string;
  processing_time: string;
  success_rate: string;
  badge?: string;
  visa_types: string[];
  order_position: number;
}

const AdminCountries = () => {
  const user = useAuth();
  const [countries, setCountries] = useState<Country[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    flag_emoji: "",
    description: "",
    processing_time: "",
    success_rate: "",
    badge: "",
    visa_types: "",
    order_position: 0,
  });

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const q = query(collection(db, "countries"), orderBy("order_position", "asc"));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Country[];
    setCountries(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login to add countries");
      return;
    }

    try {
      await addDoc(collection(db, "countries"), {
        ...formData,
        visa_types: formData.visa_types.split(",").map((v) => v.trim()),
        order_position: parseInt(formData.order_position.toString()) || 0,
      });

      toast.success("Country added successfully!");
      setFormData({
        name: "",
        flag_emoji: "",
        description: "",
        processing_time: "",
        success_rate: "",
        badge: "",
        visa_types: "",
        order_position: 0,
      });
      fetchCountries();
    } catch (error) {
      toast.error("Failed to add country");
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!user) {
      toast.error("Please login to delete countries");
      return;
    }

    if (window.confirm("Are you sure you want to delete this country?")) {
      try {
        await deleteDoc(doc(db, "countries", id));
        toast.success("Country deleted successfully!");
        fetchCountries();
      } catch (error) {
        toast.error("Failed to delete country");
        console.error(error);
      }
    }
  };

  if (user === undefined) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AuthHeader />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600">Please login to access the admin panel.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Manage Countries</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Add New Country
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Country Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="United States"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Flag Emoji</label>
                  <Input
                    value={formData.flag_emoji}
                    onChange={(e) => setFormData({ ...formData, flag_emoji: e.target.value })}
                    placeholder="🇺🇸"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Input
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Land of opportunities..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Processing Time</label>
                  <Input
                    value={formData.processing_time}
                    onChange={(e) => setFormData({ ...formData, processing_time: e.target.value })}
                    placeholder="2-6 months"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Success Rate</label>
                  <Input
                    value={formData.success_rate}
                    onChange={(e) => setFormData({ ...formData, success_rate: e.target.value })}
                    placeholder="92%"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Badge (optional)</label>
                  <Input
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    placeholder="Most Popular"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Visa Types (comma-separated)</label>
                  <Input
                    value={formData.visa_types}
                    onChange={(e) => setFormData({ ...formData, visa_types: e.target.value })}
                    placeholder="Tourist, Business, Student, +1 more"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Order Position</label>
                  <Input
                    type="number"
                    value={formData.order_position}
                    onChange={(e) => setFormData({ ...formData, order_position: parseInt(e.target.value) || 0 })}
                    placeholder="1"
                    required
                  />
                </div>

                <Button type="submit" className="w-full">Add Country</Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Existing Countries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {countries.map((country) => (
                  <div key={country.id} className="border rounded-lg p-4 flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{country.flag_emoji}</span>
                        <h3 className="font-semibold">{country.name}</h3>
                        {country.badge && (
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">{country.badge}</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{country.description}</p>
                      <div className="text-xs text-gray-500">
                        <p>Processing: {country.processing_time}</p>
                        <p>Success Rate: {country.success_rate}</p>
                        <p>Position: {country.order_position}</p>
                      </div>
                    </div>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDelete(country.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminCountries;
